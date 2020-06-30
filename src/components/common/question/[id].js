// import React, { useState } from "react";
// import { useRouter } from "next/router";
// import Home from "../../pages/HomePage";

// const Question = ({ test }) => {
//   return <div>Prueba: {test}</div>;
// };

// let [ids, setIds] = useState([1, 2, 3]);

// export const getStaticPaths = async () => {
//   //   const paths = ids.map((id) => ({
//   //     params: { test: id },
//   //   }));
//   const paths = [1, 2, 3];
//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params: { test } }) => {
//   return {
//     props: { test },
//   };
// };

// export default Question;
