// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 8HMNFKnEv7gJ55SbTqvTiU
// Component: lNF5F5pVlN
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_im_xbeanies.module.css"; // plasmic-import: 8HMNFKnEv7gJ55SbTqvTiU/projectcss
import sty from "./PlasmicSocials.module.css"; // plasmic-import: lNF5F5pVlN/css

export const PlasmicSocials__VariantProps = new Array();

export const PlasmicSocials__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicSocials__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  return (
    <div
      data-plasmic-name={"socials"}
      data-plasmic-override={overrides.socials}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.socials
      )}
    >
      <div
        data-plasmic-name={"image4"}
        data-plasmic-override={overrides.image4}
        className={classNames(projectcss.all, sty.image4)}
      />

      <div
        data-plasmic-name={"image5"}
        data-plasmic-override={overrides.image5}
        className={classNames(projectcss.all, sty.image5)}
      />

      <div
        data-plasmic-name={"image6"}
        data-plasmic-override={overrides.image6}
        className={classNames(projectcss.all, sty.image6)}
      />
    </div>
  );
}

const PlasmicDescendants = {
  socials: ["socials", "image4", "image5", "image6"],
  image4: ["image4"],
  image5: ["image5"],
  image6: ["image6"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSocials__ArgProps,
          internalVariantPropNames: PlasmicSocials__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSocials__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "socials") {
    func.displayName = "PlasmicSocials";
  } else {
    func.displayName = `PlasmicSocials.${nodeName}`;
  }
  return func;
}

export const PlasmicSocials = Object.assign(
  // Top-level PlasmicSocials renders the root element
  makeNodeComponent("socials"),
  {
    // Helper components rendering sub-elements
    image4: makeNodeComponent("image4"),
    image5: makeNodeComponent("image5"),
    image6: makeNodeComponent("image6"),
    // Metadata about props expected for PlasmicSocials
    internalVariantProps: PlasmicSocials__VariantProps,
    internalArgProps: PlasmicSocials__ArgProps
  }
);

export default PlasmicSocials;
/* prettier-ignore-end */
