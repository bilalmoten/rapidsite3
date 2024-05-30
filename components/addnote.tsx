"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const AddNoteButton = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Dialog
      open={isOpened}
      onOpenChange={(v) => {
        if (!v) {
          setIsOpened(v);
        }
      }}
    >
      <DialogTrigger asChild onClick={() => setIsOpened(true)}>
        <Button>Add a note</Button>
      </DialogTrigger>

      <DialogContent>example</DialogContent>
    </Dialog>
  );
};

export default AddNoteButton;
