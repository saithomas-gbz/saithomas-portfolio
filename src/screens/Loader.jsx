import LoadingComponent from "../components/LoadingComponent";
import { Center } from "../shared/Center";
import { LoadingTitle } from "../shared/Title";
export default function Loader() {
  return (
    <Center>
      <LoadingComponent />
      <LoadingTitle>THOMAS GRARE</LoadingTitle>
    </Center>
  );

}