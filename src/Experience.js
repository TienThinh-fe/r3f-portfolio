import {
  PresentationControls,
  Environment,
  Float,
  ContactShadows,
  Text,
} from "@react-three/drei";
import { Suspense } from "react";

import Macbook from "./Macbook";
import Placeholder from "./Placeholder";

export default function Experience() {
  return (
    <>
      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-0.5, 0.75]}
        config={{ mass: 2, tension: 200, friction: 100, precision: 0.0001 }}
      >
        <Environment preset="city" />

        <Float>
          <Suspense fallback={<Placeholder />}>
            <Macbook />
          </Suspense>
          <rectAreaLight
            width={4.5}
            height={1.65}
            intensity={65}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
            color={"#CFDFEB"}
          />
          <Text
            font="./bangers-v20-latin-regular.woff"
            position={[2.5, 0.1, 0]}
            rotation-y={-20}
            maxWidth={1.5}
            fontSize={0.8}
            textAlign="center"
          >
            Tien Thinh
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.2} opacity={0.7} blur={1} scale={6} />
    </>
  );
}
