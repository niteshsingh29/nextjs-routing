import Link from "next/link";
const Demo = () => {
  return (
    <>
      <h1>I am DEmo module</h1>
      <Link href="accounts/nested-accounts/sending-dynamic-value">
        <h2 style={{ cursor: "pointer" }}>Go to nested route &rarr;</h2>
      </Link>
    </>
  );
};
export default Demo;
