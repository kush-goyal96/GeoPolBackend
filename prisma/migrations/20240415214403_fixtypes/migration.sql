/*
  Warnings:

  - The `rating` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `prize` on the `Event` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "prize",
ADD COLUMN     "prize" INTEGER NOT NULL,
DROP COLUMN "rating",
ADD COLUMN     "rating" INTEGER;
