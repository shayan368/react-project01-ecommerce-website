export default function Rating({ rating}) {
    return (
        <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {"★".repeat(rating)}
            {"☆".repeat(5 - rating)}
            <span className="text-gray-500 ml-1"></span>
        </div>
    );
}