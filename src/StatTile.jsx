import { Box } from "@mui/material";

export default function StatTile({ icon, label, value, wide }) {
  return (
    <Box
      sx={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "16px",
        px: 2.5,
        py: 2,
        display: "flex",
        alignItems: "center",
        gap: wide ? 3 : 1.5,
        justifyContent: wide ? "center" : "flex-start",
        transition: "background 0.2s",
        "&:hover": {
          background: "rgba(255,255,255,0.09)",
        },
      }}
    >
      <Box sx={{ flexShrink: 0 }}>{icon}</Box>
      <Box>
        <Box
          sx={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {label}
        </Box>
        <Box
          sx={{ color: "#fff", fontWeight: 700, fontSize: "1.05rem", mt: 0.2 }}
        >
          {value}
        </Box>
      </Box>
    </Box>
  );
}
