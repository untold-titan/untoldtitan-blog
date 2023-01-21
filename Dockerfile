FROM npm

COPY . /app

WORKDIR /app

RUN npm i

CMD ["npm","run","dev host"]
# When running this with docker, add the arg -p 8080:5173, replace 8080 with what port you want to host it on.
