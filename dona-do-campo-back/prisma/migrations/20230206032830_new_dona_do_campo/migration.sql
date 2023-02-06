/*
  Warnings:

  - You are about to drop the column `matcheId` on the `results` table. All the data in the column will be lost.
  - Added the required column `matchId` to the `results` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "results" DROP CONSTRAINT "results_matcheId_fkey";

-- AlterTable
ALTER TABLE "results" DROP COLUMN "matcheId",
ADD COLUMN     "matchId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "results" ADD CONSTRAINT "results_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "matches"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
