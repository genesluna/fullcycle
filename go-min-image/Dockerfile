FROM golang:1.22.4-alpine as builder

WORKDIR /home/go/app

COPY . .

RUN CGO_ENABLED=0 go build -ldflags '-s -w' -o /app main.go

FROM scratch

COPY --from=builder /app /app

CMD ["/app"]