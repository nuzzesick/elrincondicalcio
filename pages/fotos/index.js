import Header from "../../components/Header";

const Fotos = () => (
  <>
    <Header />
    <div className="w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 text-white absolute mt-28 sm:mt-28">
      <div className="mt-14 sm:mt-14 md:mt-20 lg:mt-24 xl:mt-28 text-center">
        <h1 className="text-3xl sm:text-3xl lg:text-4xl font-semibold sm:font-semibold lg:font-bold text-shadow">Fotos</h1>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-14">
          <img
            className="rounded"
            src="assets/02c1c63c-c20e-4f68-8707-810f2563a06f.jfif"
            alt="810f2563a06f"
          />
          <img
            className="rounded"
            src="assets/4de03da9-18dc-41df-babf-2d1d5ad5adf4.jfif"
            alt="2d1d5ad5adf4"
          />
          <img
            className="rounded"
            src="assets/05e5e682-0032-4766-992c-cd41f8deab64.jfif"
            alt="cd41f8deab64"
          />
          <img
            className="rounded"
            src="assets/12f17e5e-0e49-43be-8b07-6e37d6d00d59.jfif"
            alt="6e37d6d00d59"
          />
          <img
            className="rounded"
            src="assets/15c84531-4c4d-45a0-8f74-cad68d3db23c.jfif"
            alt="cad68d3db23c"
          />
          <img
            className="rounded"
            src="assets/669e3f2a-a42b-430b-8dbb-f61a2b9005c8.jfif"
            alt="f61a2b9005c8"
          />
          <img
            className="rounded"
            src="assets/a69f3221-141e-404b-a986-d14642089ff5.jfif"
            alt="d14642089ff5"
          />
          <img
            className="rounded"
            src="assets/aaa34d68-db46-47df-88c8-d3bfc6b8433e.jfif"
            alt="d3bfc6b8433e"
          />
          <img
            className="rounded"
            src="assets/b0d3361f-3300-4df5-b5cd-02149ca15bb8.jfif"
            alt="02149ca15bb8"
          />
          <img
            className="rounded"
            src="assets/b10442b3-4801-4fc5-97f8-16a0f8ea7f60.jfif"
            alt="16a0f8ea7f60"
          />
          <img
            className="rounded"
            src="assets/d51cd2b5-e1be-48a7-afcc-30f840ffc6a9.jfif"
            alt="30f840ffc6a9"
          />
          <img
            className="rounded"
            src="assets/e0f7e0dc-329f-46c6-b4ce-57f2e09f5c4f.jfif"
            alt="57f2e09f5c4f"
          />
        </div>
      </div>
    </div>
    <style jsx>
      {`
        .text-shadow {
          text-shadow: 0 0 10px #00000042;
        }
        .footer {
          background-color: #000000c4;
          color: white;
        }
      `}
    </style>
  </>
);
export default Fotos;
