import React, { useState } from "react";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const VideoSection = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="tutoriais" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#24366E] mb-4">
            {videos.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            {videos.subtitle}
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.videoList.map((video) => (
            <Card
              key={video.id}
              className="group cursor-pointer overflow-hidden border-2 border-gray-100 hover:border-[#F72585] transition-all duration-300 hover:shadow-xl"
              onClick={() => setSelectedVideo(video)}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#F72585] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play
                        className="text-white ml-1"
                        size={28}
                        fill="white"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#24366E] mb-2">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#24366E]">
              {selectedVideo?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              src={selectedVideo?.videoUrl}
              title={selectedVideo?.title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
