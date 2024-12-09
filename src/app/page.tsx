import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mt-64 flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold underline decoration-primary">
        Hey, you spelled my name wrong
      </h1>
      <h2 className="mt-8 text-4xl font-semibold">Schaffer -&gt; Shaffer</h2>

      <Link
        href="https://brockshaffer.dev"
        className="mt-10 rounded-xl border-4 border-primary bg-primary p-4 text-4xl transition hover:border-primary-foreground/90 hover:bg-primary/90"
      >
        Click Here For A Redirect
      </Link>
    </main>
  );
}
