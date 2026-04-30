"use client";
import React from "react";


import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>

           <p className={twMerge("font-mono-cyber text-xl mb-4")}> 
              {item.title}
            </p>

            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "GoblinWisp Secure Session Protocol",
    description: (
      <>
      <div className="space-y-4 font-body text-base leading-relaxed text-white md:text-lg lg:text-xl">
        <p>
          GoblinWisp is a secure, infrastructure-less peer-to-peer communication framework for ESP32 resource-constrained devices built over the ESP-NOW protocol. While ESP-NOW is fast and lightweight, its native design does not guarantee secure session establishment, and it lacks essential protections such as peer authentication, dynamic key exchange, replay defense, and end-to-end message integrity.
        </p>

        <p>
          To close these gaps, GoblinWisp adds a lightweight cryptographic security layer that upgrades ESP-NOW into a session-based secure channel. During session setup, devices perform an ephemeral key exchange (X25519 / ECDH) to generate a shared secret that is never transmitted over the air. This secret is expanded using HKDF-SHA256 into independent session keys for encryption and authentication.
        </p>

        <p>
          Once the session is established, every message is protected using AES-GCM authenticated encryption, ensuring confidentiality, integrity, and authenticity. To defeat replay attacks, each encrypted packet includes a monotonic counter / nonce policy; the receiver rejects stale or duplicated counters, preventing an attacker from retransmitting old valid packets to trigger actions.
        </p>

        <p>
          GoblinWisp is designed to be MITM-resistant by binding the session to expected peer identities through public key fingerprint / verification logic, ensuring that a third device cannot transparently insert itself between two nodes during key exchange.
        </p>

        <p>
          Overall, GoblinWisp transforms ESP-NOW into a secure end-to-end communication channel that supports authenticated session establishment, strong encryption, tamper detection, and replay protection, without requiring routers, internet connectivity, or centralized authentication servers.
        </p>
      </div>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
