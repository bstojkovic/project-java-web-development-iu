# Full-stack framework vs creating a React.js application from scratch
For creating a React.js application, a choice is presented: pick a full-stack framework, or build React app from scratch.

Since my design choice from Phase 1 was to use a FARM stack, using a full-stack framework might be too much overhead as I will be building Python + FastAPI server anyways, and connecting those might prove troublesome.

On the other hand, choosing a pre-made full-stack framework build could be an easier choice in the beginning.
However, I am not sure how hard it is to connect it to my backend.

With this in mind, I am going to go with the latter - building a React app from scratch.
This not only provides a learning opportunity on how a React app is built, but also leaves room for falling back to a framework if needed.

# Choosing a build tool for React
For installing a build tool for React, three choices are presented: Vite, Parcel, and Rsbuild.
Metro is another choice, but that is for React Native support, which I do not need.

As per research:

Vite aims to provide faster and leaner development experience for modern web projects.
This tool also provides a custom backend integration, providing various configuration options, and what seems like an easy setup.

Parcel notes that it is a great option for scalable architecture leading up to massive production applications.

Rsbuild notes that it is lightning fast, with an ability to migrate from other tools.
Going over the documentation, it is noted that connecting to backend might require implementing the Rspack loader in some cases, which might prove cumbersome.

Having ease of use in mind, Vite seems like a natural choice here, with ability to migrate to other tooling as required.
