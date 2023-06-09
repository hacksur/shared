import React from 'react';

type CartelProps = {
  size?: 'tiny' | 'small' | 'medium' | 'large';
  variant?: 'basic' | 'full'
  customCss?: string;
  CTA: React.ReactNode;
  message: {
    icon: string;
    title: string;
    description: string;
    button?: {
      title?: string;
      action?: () => void;
    };
  };
};

export const Cartel: React.FC<CartelProps> = ({
  size = 'medium',
  variant = 'basic',
  customCss,
  message,
  CTA
}) => {
  const { title, description } = message || {};

  switch(variant) {
    case 'basic':
      return (
        <div className="flex flex-row justify-center p-[20px] bg-neutral-100 rounded-[8px]">
          <div className="flex flex-col space-y-[20px] w-[200px] text-center">
            <div className="text-neutral-800">{title}</div>
            <div className="text-neutral-600">{description}</div>
            <div className="h-[64px]">{CTA}</div>
          </div>
        </div>
      );
    case 'full':
      return (
        <div className="border border-neutral-100 rounded-[20px] text-neutral-800 flex flex-row justify-between w-full">
          <div
            className="w-[300px] rounded-bl-[20px] rounded-tl-[20px] bg-cover bg-center"
            style={{backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), #1C181E), url('https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/f583905b-d36c-49e6-0f3b-edc3d40b3c00/public')`}}
          ></div>
          <div>
            <div className="flex flex-col space-y-[20px] p-[40px] ">
              <div className="text-subheading-bold">{title}</div>
              <div className="text-p2-medium">{description}</div>
              <div className="h-[64px]">{CTA}</div>
            </div>
          </div>
        </div>
      );
  }
};
