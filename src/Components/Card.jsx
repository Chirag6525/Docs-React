import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data, reference}) {
  return (
		<motion.div
			drag
			dragConstraints={reference}
			dragElastic={0.2}
			whileDrag={{ scale: 1.2 }}
			className="
    relative
    w-60 h-72 
    rounded-[45px]
     bg-zinc-900/90
     text-white py-10 px-8
     overflow-hidden flex-shrink-0"
		>
			<FaFileAlt />
			<p
				className="text-sm 
        leading-tight 
        mt-5 
        font-semibold"
			>
				{data.desc}
			</p>
			<div
				className="footer 
        absolute 
        bottom-0 w-full
        left-0"
			>
				<div
					className="flex justify-between items-center
           mb-3 py-3 px-8"
				>
					<h5>{data.filesize}</h5>
					<span
						className="w-5 h-5 bg-sky-600
            rounded-full flex items-center justify-center"
					>
						{data.close ? (
							<IoCloseSharp />
						) : (
							<MdOutlineFileDownload
								size=".8em"
								color="#fff"
							/>
						)}
					</span>
				</div>
				{data.tag.isOpen && (
					<div
						className={`tag w-full py-4 ${
							data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
						} justify-center items-center flex`}
					>
						<h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
					</div>
				)}
			</div>
		</motion.div>
	);
}

export default Card