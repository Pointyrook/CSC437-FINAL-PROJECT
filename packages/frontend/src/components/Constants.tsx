import type {ChordData} from "../main.tsx";

export const DEFAULT_RESULTS: ChordData[] = [
    {id: 1, title: "CMaj", name: "C Major Triad", notes: ["C", "E", "G"], rarity: "Common"},
    {id: 2, title: "AMaj", name: "A Major Triad", notes: ["A", "C#", "E"], rarity: "Common"},
    {id: 3, title: "DMin7", name: "D Minor Seventh", notes: ["D", "F", "A", "C"], rarity: "Uncommon"}
]