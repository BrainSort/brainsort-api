-- AlterTable
ALTER TABLE "insignias" ADD COLUMN IF NOT EXISTS "categoria" TEXT NOT NULL DEFAULT 'General';
