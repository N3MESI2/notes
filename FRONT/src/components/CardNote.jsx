import { SquarePen, Trash } from "lucide-react";

const CardNote = () => {
  return (
   <div class="card bg-base-300 w-full">
     <div class="card-body">
    <h2 class="card-title text-accent font-bold lg:text-2xl">
      Card Title
      </h2>
    <p className="text-amber-50">
      A card component has a figure, a body part, and inside body there are title and actions parts
    </p>
    <div class="flex justify-between item-center mt-6">
      <time dateTime="">7 de noviembre de 2025</time>
      <div className= "flex gap-4"></div>
      <SquarePen className="text-white cursor-pointer"></SquarePen>
      <Trash className="text-red-400 cursor-pointer"></Trash>
    </div>
  </div>
</div>
  )
}

export default CardNote;
