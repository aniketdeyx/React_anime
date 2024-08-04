import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { Link } from "react-router-dom";
   
  export default function Cardcomp({ id, title, image }) {


    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
            className="object-cover w-full h-full"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          
        </CardBody>
        <CardFooter className="pt-0">
        <Link to={`/anime/${id}`}>
          <Button>Read More</Button>
        </Link>
        </CardFooter>
      </Card>
    );
  }