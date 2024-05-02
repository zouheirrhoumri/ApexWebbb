import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import StatsCard from "./StatsCard";

export default function Statistics() {
  return (
    <>
      <Header />
      <main className="h-full bg-gray-900 py-20">
        {/* Stats Row */}
        <div className="flex justify-center  py-10 p-14">
          <StatsCard
            title="BT SUBSCRIBERS"
            total="20,456"
            bgColor="bg-red-400"
          />
          <StatsCard
            title="BT ACTIVE SUBSCRIBERS"
            total="19,694"
            bgColor="bg-blue-500"
          />
          <StatsCard title="BT OPT OUTS" total="711" bgColor="bg-purple-400" />
          <StatsCard
            title="BT TODAY'S SUBSCRIPTION"
            total="0"
            bgColor="bg-purple-900"
          />
        </div>

        {/* Table Row */}
        <div className="flex justify-center py-10 p-5">
          <Table
            title="Table 1"
            headers={["KEYWORDS", "TOTAL ENTRIES"]}
            data={[
              ["Bible", "11,980"],
              ["Blah", "340"],
              ["Blah", "901"],
              ["Blah", "11,950"],
              ["Blah", "459"],
            ]}
          />
          <Table
            title="Table 2"
            headers={["MSISDN", "ENTRIES"]}
            data={[
              ["26809304030", "495,455"],
              ["26809304030", "495,455"],
              ["26809304030", "495,455"],
              ["26809304030", "32,333"],
              ["26809304030", "31,199"],
            ]}
          />
          <Table
            title="Table 3"
            headers={["MSISDN", "POINTS"]}
            data={[
              ["28679609009", "11,290"],
              ["28679609009", "9,230"],
              ["28679609009", "234"],
              ["28679609009", "56,230"],
              ["28679609009", "323"],
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
