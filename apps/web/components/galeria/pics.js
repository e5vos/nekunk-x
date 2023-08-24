import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import {
  Card,
  Heading,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Image,
} from "@chakra-ui/react";

export default function Pics({ data, key, element }) {
  const [ViewerImage, setViewerImage] = useState(0);
  const [ViewerOpen, setViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setViewerImage(index);
    setViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setViewerImage(0);
    setViewerOpen(false);
  };

  return (
    <>
      {element && (
        <Card maxW="sm" rounded={"2xl"}>
          <CardBody>
            <Image
              src={element.pictures[0]}
              alt="Kép a programról"
              borderRadius="xl"
              height={250}
              width={400}
              objectFit="cover"
            />
            <Heading mt={6} size="md">
              {element.title}
            </Heading>
          </CardBody>
          <Divider color={"gray.200"} />
          <CardFooter>
            <Button
              variant="solid"
              colorScheme="purple"
              onClick={() => setViewerOpen(true)}
              px={8}
              rounded={"full"}
              ml={"auto"}
            >
              Képek megnyitása →
            </Button>
          </CardFooter>
        </Card>
      )}
      {ViewerOpen && (
        <ImageViewer
          src={element.pictures}
          currentIndex={ViewerImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          className="z-50"
        />
      )}
    </>
  );
}
