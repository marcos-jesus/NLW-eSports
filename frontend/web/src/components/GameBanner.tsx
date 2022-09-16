interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export default function GameBanner(props: GameBannerProps) {
  return (
    <div>
       <a href="" className="relative rounded-2xl overflow-hidden">
          <img src={props.bannerUrl} alt="" />

          <div className="w-full pt-1 pb-4 px-1 bg-game-gradient absolute bottom-0 left-0 right-0 ">
            <strong className="font-bold text-white block">{props.title}</strong>
            <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    </div>
    
  )
}