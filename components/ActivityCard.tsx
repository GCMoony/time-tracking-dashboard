import Image from 'next/image';
import menuIcon from "../public/card-icons/icon-ellipsis.svg";

export default function ActivityCard(props:
   {
      card_icon?:string,
      card_color?:string,
      card_curr_hours?:Number,
      card_prev_hours?:Number,
      card_time_view?:string
   }) {

  
  return (
    <div className="text-pale-blue  sm:h-60 bg-dark-blue rounded-lg overflow-hidden flex flex-col ">

      <div className={`card-top bg-${props.card_color || 'light-orange'}  overflow-hidden justify-right`}>
      <Image className="float-right h-20 w-20 -m-1" width={1} height={1} alt="Menu Button" src={`./card-icons/icon-${props.card_icon || "work"}.svg`} />
      </div>

      <div className='card-bottom rounded-lg hover:bg-desaturated-blue grow p-3'>
        <main className="flex flex-row justify-between">
          
          <header className="flex flex-col justify-center flex-grow">
            <h3>{capitalCardTitle(props.card_icon)}</h3>
            <h1>{`${props.card_curr_hours || 0 }`}hrs</h1>
          </header>

          <section className="flex flex-col flex-grow justify-center text-right">
            <Image className="self-end" width={40} height={40} alt="Menu Button" src={menuIcon} />
            <p>{`${changeTimePref(props.card_time_view) || 'Last Week'}`} - {`${props.card_prev_hours || 0}`}hrs</p>
          </section>

        </main>
      </div>

    </div>
  );
}

function capitalCardTitle(title?: string)
{
  if(title == undefined)
    return "Work";
  let firstChar = title.charAt(0);
  title = title.replace(firstChar, firstChar.toUpperCase());
  return title;
}

function changeTimePref(timePref?: string)
{
  if(timePref == undefined)
    return "Yesterday";

  switch(timePref.toLocaleLowerCase())
  {
    case "daily":
      return "Yesterday"
    case "weekly":
      return "Last Week"
    case "monthly":
      return "Last Month"
  }
  if(timePref.toLowerCase() == "daily")
    return "hrs"

}