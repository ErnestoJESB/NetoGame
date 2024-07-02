import React, { useState, useRef, ChangeEvent } from "react";
import { Button, Card, CardContent } from "@mui/material";

const Imagen: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files ? e.target.files[0] : null;
    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  const resetImage = () => setImage(null);

  return (
    <Card
      sx={{
        maxWidth: 300,
        margin: "auto",
        mt: 5,
        textAlign: "center",
        background: "#282c34",
      }}
    >
      <CardContent>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
        />
        <Button
          variant="contained"
          onClick={() => fileInputRef.current?.click()}
        >
          Cargar imagen
        </Button>
        {image && (
          <>
            <img
              src={image}
              alt="Preview"
              style={{ marginTop: "20px", maxWidth: "100%" }}
            />
            <Button
              variant="contained"
              onClick={resetImage}
              style={{ marginTop: "10px" }}
            >
              Resetear Imagen
            </Button>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default Imagen;
