import type { Band } from "../types/band"

export const bands: Band[] = [
    {
        id: 1,
        name: "YEW",
        genre: "Alternative Rock / Indie Pop",
        image: "/images/bands/yew.jpg",
        members: [
            { name: "ทิ้ว", role: "ร้องนำ" },
            { name: "พี", role: "กีตาร์" },
            { name: "แดน", role: "กีตาร์" },
            { name: "ทรัพย์", role: "กลอง" }
        ]
    },
    {
        id: 2,
        name: "Dr.Fuu",
        genre: "Pop Rock",
        image: "/images/bands/dr-fuu.jpg",
        members: [
            { name: "Boat", role: "ร้องนำ / หัวหน้าวง" },
            { name: "Benz", role: "กีตาร์โซโล่" },
            { name: "Sor", role: "กลอง" },
            { name: "Moo", role: "เบส" }
        ]
    },
    {
        id: 3,
        name: "Solitude Is Bliss",
        genre: "Alternative Rock",
        image: "/images/bands/solitude-is-bliss.jpg",
        members: [
            { name: "Thanaphol Chumkhammool (เฟนเดอร์)", role: "นักร้อง" },
            { name: "Pathanin Sitthi (เบียร์)", role: "กีตาร์" },
            { name: "Jomyoot Wongto (โด่ง)", role: "มือเบส" },
            { name: "Panthakorn Thongnen (อาร์ท)", role: "กลอง" },
            { name: "Songpon Kaewwongwarn (ปอน)", role: "คีย์บอร์ด" }
        ]
    }
]