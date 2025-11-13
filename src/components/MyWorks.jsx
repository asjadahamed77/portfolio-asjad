import React from "react";
import { myWorks } from "../assets/MyWorks";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const MyWorks = () => {
  return (
    <div id="work" className="px-4 sm:px-20 md:px-16 lg:px-28 py-32">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 md:flex-row gap-6  sm:gap-8">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className="flex flex-col  gap-8 p-4  bg-zinc-900 rounded-lg  cursor-pointer border-transparent border duration-500 hover:border hover:border-white hover:shadow-[0px_4px_8px_4px] hover:shadow-white "
          >
            <div>
              <img
                src={work.imageFile}
                alt="WorkImage"
                className="rounded-sm"
              />
            </div>
            <div>
              <h1 className="sm:text-xl  font-medium  line-clamp-2 ">
                {work.name} - {work.subtitle}
              </h1>
              <p className="mt-4 text-left text-white/70 line-clamp-4 text-sm font-light ">
                {work.description}
              </p>

              <div className="flex justify-between mt-4">
                {work.live && (
                  <a
                    href={work.live}
                    target="_blank"
                    className=" flex items-center gap-3 hover:underline text-sm font-medium tracking-wider"
                  >
                    <ExternalLink />
                    Try it Live
                  </a>
                )}

                <Link
                  to={`/work/${work.id}`}
                  className=" bg-white/5 border border-white/10 rounded w-fit flex items-center px-4 py-2 text-sm gap-2 cursor-pointer group "
                >
                  Details{" "}
                  <ArrowRight className="size-4 group-hover:ml-2 transition-all" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
