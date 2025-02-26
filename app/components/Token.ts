
export const colors = {
  primary: "#007bff", 
  background: "#000",  
  textPrimary: "#fff",
  textSecondary: "#aaa",
  border: "#444",      
  inputBackground: "#111",
  error: "red",
};

export const spacing = {
  small: 10,
  medium: 15,
  large: 20,
};

export const borderRadius = {
  small: 8,
  medium: 10,
};

export const textStyles = {
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  errorText: {
    fontSize: 14,
    color: colors.error,
  },
};

export const containerStyles = {
  fullScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    padding: spacing.small,
    borderRadius: borderRadius.small,
    alignItems: "center",
    width: 300,
    marginBottom: spacing.medium,
  },
  
};
