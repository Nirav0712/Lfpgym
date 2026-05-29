import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black text-white px-8 py-16 min-h-[40vh]">
      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        <h1 className="text-5xl font-black text-yellow-500 tracking-tight uppercase">
          Kick Boxing
        </h1>
        <div className="h-1 w-20 bg-yellow-500" />
        <p className="text-gray-300 text-lg leading-relaxed">
          Experience our high-energy Kick Boxing class. Develop explosive power, learn self-defense techniques, and complete a fat-burning workout.
        </p>
        <Link
          href="/"
          className="mt-4 border border-yellow-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-yellow-500 hover:text-black transition"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
