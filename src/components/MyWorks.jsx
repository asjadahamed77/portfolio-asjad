import React from "react";
import { myWorks } from "../assets/MyWorks";
import { ExternalLink } from "lucide-react";

const MyWorks = () => {
  return (
    <div id="work" className="px-4 sm:px-20 my-32">
      <div className="grid lg:grid-cols-2 md:flex-row gap-12">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className="flex flex-col  gap-8 p-4 sm:p-12 bg-zinc-900 rounded-4xl  cursor-pointer border-transparent border duration-500 hover:border hover:border-white hover:shadow-[0px_4px_8px_4px] hover:shadow-white "
          >
            <div>
              <img
                src={work.imageFile}
                alt="WorkImage"
                className="rounded-3xl"
              />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold tracking-wide">
                {work.name} - {work.subtitle}
              </h1>
              <p className="mt-4 text-justify text-white/70 max-h-[250px] overflow-scroll text-ellipsis">
                {work.description}
              </p>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {work.tools.map((tool, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-zinc-800 rounded-lg shadow-sm border-transparent border duration-500 hover:border hover:border-white hover:shadow-[0px_4px_8px_4px] hover:shadow-white"
                  >
                    <img
                      src={tool.toolIcon}
                      alt={tool.tool}
                      className="w-6 h-6 object-contain"
                    />
                    <p className="text-white/90 text-sm">{tool.tool}</p>
                  </div>
                ))}
              </div>

              {work.live && (
                <a href={work.live} target="_blank" className="mt-10 flex items-center gap-3 hover:underline text-xl font-medium tracking-wider">
                  <ExternalLink />
                  Try it Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWorks;
