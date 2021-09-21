-- Adminer 4.8.1 PostgreSQL 13.4 (Debian 13.4-1.pgdg100+1) dump

DROP TABLE IF EXISTS "todos";
DROP SEQUENCE IF EXISTS todos_id_seq;
CREATE SEQUENCE todos_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."todos" (
    "id" integer DEFAULT nextval('todos_id_seq') NOT NULL,
    "title" character varying(100) NOT NULL,
    "checked" boolean NOT NULL,
    CONSTRAINT "todos_pkey" PRIMARY KEY ("id")
) WITH (oids = false);


INSERT INTO "todos" ("id", "title", "checked") VALUES
(2,	'test',	'0'),
(1,	'test',	'0'),
(3,	'test id',	'0'),
(4,	'test id',	'0'),
(5,	'test id',	'0'),
(6,	'first todo',	'0'),
(7,	'first todo',	'0'),
(8,	'first todo',	'0'),
(9,	'first todo',	'0'),
(10,	'first todo',	'0'),
(11,	'first todo',	'0'),
(12,	'test',	'0'),
(13,	'first todo',	'0'),
(14,	'first todo 222',	'0'),
(15,	'first todo 4444',	'0'),
(16,	'first todo 4455',	'0'),
(17,	'first todo 4455',	'0'),
(18,	'first todo 4456',	'0');

-- 2021-09-21 12:09:30.277547+00
