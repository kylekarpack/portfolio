import { GoodreadsBookshelf } from "react-goodreads-shelf";

export default function () {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 md:py-20 md:px-0">
      <h2 className="my-4 text-xl md:text-3xl">Reading</h2>
      <GoodreadsBookshelf userId="63515611" limit={500} width={170} groupBy="year" />
    </div>
  );
}
