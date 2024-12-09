import Link from "next/link";

export default function HomePage() {
  return (
    <main className="px-4 mx-auto mt-28 flex flex-col items-center justify-center text-center md:mt-64">
      <h1 className="text-3xl font-bold underline decoration-primary md:text-6xl">
        Hey, you spelt my name wrong
      </h1>
      <h2 className="mt-8 text-2xl font-semibold md:text-4xl">
        Schaffer -&gt; Shaffer
      </h2>

      <Link
        href="https://brockshaffer.dev"
        prefetch={true}
        className="mt-10 rounded-xl border-4 border-primary bg-primary p-4 text-xl transition hover:border-primary-foreground/90 hover:bg-primary/90 md:text-4xl"
      >
        Click Here For A Redirect
      </Link>
    </main>
  );
}
