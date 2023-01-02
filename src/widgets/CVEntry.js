import Location from "./icons/Location";

function CVEntry(props) {
  return (
    <div className={props.className + " mx-5 md:mx-0"}>
      <p className="text-tim-gray">{props.time}</p>
      <p className="text-xl mt-3">{props.position}</p>
      <div className="flex items-center my-3">
        <Location className="w-8 mr-1" />
        <p className="text-tim-gray">{props.location}</p>
      </div>
      {props.description}
    </div>
  );
}

export default CVEntry;
