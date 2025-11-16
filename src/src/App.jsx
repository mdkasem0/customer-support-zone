import { useEffect, useState } from "react";
import "./App.css";
import Container from "./Component/Container";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import StatsSection from "./Component/StatsSection";
import TicketCard from "./Component/TicketCard";
import { toast } from "react-toastify";

function App() {
  const [data, setData] = useState(null);
  const [processTask, setProcessTask] = useState(0);
  const [resolveTask, setResolveTask] = useState(0);
  const [processData, setProcessData] = useState([]);
  const [CompletedDAta, setCompletedData] = useState([]);

  console.log(data);
  useEffect(() => {
    fetch("/tickets.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  const ticketsClickHandler = (ticket) => {
    setProcessTask((prev) => prev + 1);
    toast.success(`You have selected ticket ID ${ticket.id} for processing.`);
    setProcessData((prev) => [...prev, ticket]);
  };

  const completeTaskHandler = (id) => {
    setResolveTask((prev) => prev + 1);
    setProcessTask((prev) => prev - 1);
    const remainingTasks = processData.filter((task) => task.id !== id);
    const completedTask = processData.find((task) => task.id === id);

    const avaiableData = data.filter((task) => task.id !== id);
    setData(avaiableData);
    setProcessData(remainingTasks);
    setCompletedData((prev) => [...prev, completedTask]);
    toast.success(`Task ID ${id} has been marked as completed.`);
  };

  return (
    <>
      <div className="sticky top-0 z-50 bg-base-100 shadow-sm ">
        <Container>
          <Navbar />
        </Container>
      </div>
      <div>
        <Container>
          <StatsSection processTask={processTask} resolveTask={resolveTask} />
        </Container>
      </div>

      <div>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-8">
            {/* ------------ left ------------- */}
            <div className="col-span-1 md:col-span-9 ">
              <h1 className="text-[#34485A] font-bold text-xl">
                Customer Tickets
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
                {data &&
                  data.map((item) => (
                    <TicketCard
                      ticketsClickHandler={ticketsClickHandler}
                      key={item.id}
                      data={item}
                    />
                  ))}
              </div>
            </div>
            {/* ----------------- Right ------------------ */}
            <div className="col-span-1 md:col-span-3  rounded-lg h-fit">
              <h1 className="text-[#34485A] font-bold text-xl">Task Status</h1>
              <div className="mb-6 py-4">
                {processData.length === 0 ? (
                  <p>No task in progress</p>
                ) : (
                  <>
                    {processData.map((singledata) => (
                      <>
                        <div
                          className="rounded-md shadow-md p-3 mb-2 flex flex-col gap-3"
                          key={singledata.id}
                        >
                          <h1 className="font-[#001931] text-[18px] font-bold mb-3">
                            {singledata.title}
                          </h1>
                          <button
                            onClick={() => completeTaskHandler(singledata.id)}
                            className="cursor-pointer w-full btn bg-[#02A53B] text-white"
                          >
                            Complete
                          </button>
                        </div>
                      </>
                    ))}
                  </>
                )}
              </div>
              <h1 className="text-[#34485A] font-bold text-xl">
                Resolved Task
              </h1>
              <div className="py-4">
                {CompletedDAta.length === 0 ? (
                  <p>No task completed</p>
                ) : (
                  <>
                    {CompletedDAta.map((singledata) => (
                      <div
                        key={singledata.id}
                        className="rounded-md shadow-md p-3 mb-2 bg-gray-100"
                      >
                        <h1 className="text-[#001931] text-[16px] font-semibold">
                          {singledata.title}
                        </h1>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
