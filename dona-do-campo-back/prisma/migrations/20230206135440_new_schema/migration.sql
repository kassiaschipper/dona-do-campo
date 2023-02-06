/*
  Warnings:

  - You are about to drop the `results` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "results" DROP CONSTRAINT "results_matchId_fkey";

-- AlterTable
ALTER TABLE "matches" ADD COLUMN     "homeScore" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "visitorScore" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "results";
