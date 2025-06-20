import React from "react";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleSubmit = () => {};

  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          className="mb-5"
          onClick={handleSubmit}
        >
          <GoBell />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
