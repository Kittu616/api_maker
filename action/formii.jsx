"use server";
import fs from "fs/promises";

const SubmitAction = async (e) => {
  console.log(e.get("name"), e.get("add"));

  fs.writeFile(
    "test.txt",
    `Name is ${e.get("name")} and address is ${e.get("add")}\n`
  );
};

export { SubmitAction };