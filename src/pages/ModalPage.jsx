import React from "react";
import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const hanldeClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <div>
      <Button onClick={hanldeClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={hanldeClose} actionBar={actionBar}>
      <p>Here is some importatnt information that i'd like you to rivew</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
        nisl, tincidunt ac dui malesuada, tempus vehicula orci. Etiam iaculis,
        ipsum at viverra mollis, leo ligula dapibus ex, viverra consectetur nunc
        massa at purus. Nulla luctus dapibus lorem eu ornare. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Sed commodo lorem non lectus venenatis, vel imperdiet lorem auctor.
        Vivamus commodo enim ut libero semper aliquam. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Aliquam erat volutpat. Aenean ultricies leo ut ultricies dignissim.
        Donec dui eros, scelerisque at mattis rhoncus, cursus at purus. In hac
        habitasse platea dictumst. Aliquam erat volutpat. Phasellus ullamcorper
        lectus sed ante interdum pellentesque. Donec pellentesque vehicula odio
        id bibendum.
      </p>
    </div>
  );
}

export default ModalPage;
