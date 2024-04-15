-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "rating" TEXT,
ALTER COLUMN "feedback" DROP NOT NULL;
