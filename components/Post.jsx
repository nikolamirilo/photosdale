import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Post(props) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[350px] cursor-pointer relative bg-cover bg-center">
      <CardHeader className="absolute bottom-0 flex flex-col z-10 justify-center items-center">
        <p className="text-tiny text-white uppercase text-center">
          {props.text}
        </p>
        <h4 className="text-white font-medium text-large text-center">
          {props.title}
        </h4>
      </CardHeader>
      <Link href={props.link}>
        <Image
          fill
          alt="Card background"
          className="w-full h-full object-cover z-20 object-center filter hover:brightness-50 hover:z-0 transition-all duration-100 ease-soft-spring hover:scale-125"
          src={props.image}
        />
      </Link>
    </Card>
  );
}
