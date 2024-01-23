import React from "react";
import { Card, CardHeader, Image } from "@nextui-org/react";

export default function Post(props) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[350px] cursor-pointer">
      <CardHeader className="absolute w-full h-full z-0 hover:z-20 flex flex-col !items-start">
        <p className="text-tiny text-white uppercase">{props.text}</p>
        <h4 className="text-white font-medium text-large">{props.title}</h4>
      </CardHeader>
      <Image
        isZoomed
        shadow="md"
        removeWrapper
        alt="Card background"
        className="z-10 w-full h-full object-cover filter brightness-100 hover:brightness-50"
        src={props.image}
      />
    </Card>
  );
}
