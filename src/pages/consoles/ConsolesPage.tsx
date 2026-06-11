import ConsoleCard from "../../components/console-card/ConsoleCard";

export default function ConsolesPage() {
  const consoleList: Array<string> = [
    "GameBoy",
    "GameBoy Color",
    "GameBoy Advance",
    "Nintendo Entertainment System (NES)",
    "Super Nintendo Entertainment System (SNES)",
  ];
  return (
    <div>
      {consoleList.map((name) => (
        <ConsoleCard consoleName={name} />
      ))}
    </div>
  );
}
