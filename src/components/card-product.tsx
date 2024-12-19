import { ProductType } from "../libs/types"

export const CardProduct = ({ title, description, category, image, price, rating }: ProductType) => {
    return (
        <div className="border border-white rounded-md hover:bg-black/5 w-fit max-w-[300px]">
            <div className="w-full">
                <img src={image} alt={title} className="object-cover w-full aspect-square rounded-md" width={100} height={80} />
                <h1 className="font-bold text-xl text-center">{title}</h1>
            </div>
 
            <div className="w-full py-6 px-4 space-y-2">
                <div className="pb-10">
                    <p className="line-clamp-6 text-base leading-relaxed">{description}</p>
                </div>
                <div className="w-full grid grid-cols-2 gap-2 place-content-center text-center">
                    <span className="rounded-lg p-2 bg-blue-300 textp-center text-sm text-center">{category}</span>
                    <span className="rounded-lg p-2 bg-blue-300 textp-center text-sm text-center">{Number(rating.count.toFixed(2))} / {Number(rating.rate.toFixed(2))}</span>
                </div>
                <div className="w-full grid grid-cols-2 gap-2 place-content-center text-center">
                    <span className="text-xl font-bold text-blue-300">${price}</span>
                    <button className="py-2 px-4 bg-blue-300 hover:bg-blue-200 rounded-md hover:text-blue-300">Shop Now</button>
                </div>
            </div>
        </div>
    )
}