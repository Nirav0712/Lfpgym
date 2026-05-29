"use client";

const schedule = {
    Sunday: [
        { time: "09:00 - 10:00", title: "Yoga", trainer: "John Doe" },
        { time: "11:30 - 12:30", title: "Cardio Blast", trainer: "Sarah Lee" },
        { time: "17:00 - 18:00", title: "Zumba", trainer: "Mike Johnson" },
    ],
    Monday: [
        { time: "07:00 - 08:00", title: "Aerobics", trainer: "Anna Smith" },
        { time: "10:00 - 11:00", title: "Yoga", trainer: "John Doe" },
        { time: "18:00 - 19:00", title: "HIIT Training", trainer: "Chris Evans" },
    ],
    Tuesday: [
        { time: "08:00 - 09:00", title: "Zumba", trainer: "David Miller" },
        { time: "12:00 - 13:00", title: "Zumba", trainer: "Sarah Lee" },
        { time: "17:30 - 18:30", title: "Boxing", trainer: "Mark Davis" },
    ],
    Wednesday: [
        { time: "AFTERNOON", title: "CrossFit", trainer: "Laura Green" },
        { time: "12:30 - 13:30", title: "Pilates", trainer: "Anna Smith" },
        { time: "18:00 - 19:00", title: "CrossFit", trainer: "Tom Harris" },
    ],
    Thursday: [
        { time: "11:00 - 12:00", title: "Kickboxing", trainer: "John Doe" },
        { time: "11:00 - 12:00", title: "Cardio Blast", trainer: "Sarah Lee" },
        { time: "17:00 - 18:00", title: "Kickboxing", trainer: "Mark Davis" },
    ],
    Friday: [
        { time: "Evening", title: "Core-ABS", trainer: "Emily Brown" },
        { time: "10:00 - 11:00", title: "Muay Thai", trainer: "David Miller" },
        { time: "18:30 - 19:30", title: "Dance Fit", trainer: "Laura Green" },
    ],
    Saturday: [
        { time: "07:00 - 08:00", title: "Yoga", trainer: "John Doe" },
        { time: "11:30 - 12:30", title: "Zumba", trainer: "Sarah Lee" },
        { time: "16:00 - 17:00", title: "Body Pump", trainer: "Mike Johnson" },
    ],
};

export default function GymSchedule() {
    return (
        <section className="bg-black py-24">
            <div className="max-w-[1300px] mx-auto px-5">

                <div className="text-center mb-14">
                    <p className="text-yellow-400 font-medium mb-3">
                        Gym Schedule
                    </p>

                    <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
                        Find the Best Time to Join
                        <br />
                        Your Favorite Classes
                    </h2>

                    <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
                        Check our weekly schedule to plan your workouts,
                        from morning yoga to evening strength training sessions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-3">
                    {Object.entries(schedule).map(([day, classes]) => (
                        <div key={day}>

                            {/* Day Header */}
                            <div className="border border-yellow-400 bg-black h-16 flex items-center justify-center mb-3">
                                <h3 className="text-white text-xl font-bold">
                                    {day}
                                </h3>
                            </div>

                            {/* Classes */}
                            <div className="space-y-3">
                                {classes.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#171717] min-h-[130px] flex flex-col justify-center items-center text-center px-3"
                                    >
                                        <p className="text-yellow-400 font-medium text-lg">
                                            {item.time}
                                        </p>

                                        <h4 className="text-white text-2xl font-bold mt-2">
                                            {item.title}
                                        </h4>

                                        <p className="text-gray-300 mt-2 text-lg">
                                            {item.trainer}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}