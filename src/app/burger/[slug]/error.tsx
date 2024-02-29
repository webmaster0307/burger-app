'use client';

import { Box, Button, Typography } from "@mui/material"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <Box>
      <Typography variant="h2">Something went wrong!</Typography>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  )
}