export default function ConsoleCard(props: unknown) {
  return (
    <h1 className="p-4 m-2 bg-gray-500 font-bold text-center rounded-md">
      {props.consoleName}
    </h1>
  );
}
