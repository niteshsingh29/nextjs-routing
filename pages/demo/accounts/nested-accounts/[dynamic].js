import { useRouter } from "next/router";
const dynamic = () => {
  const router = useRouter();
  const params = router.query.dynamic;
  console.log("params", params);
  return (
    <>
      <h1>I am Dynamic route</h1>
      <div>Your dynamic param is Here :- {params}</div>
    </>
  );
};
export default dynamic;
