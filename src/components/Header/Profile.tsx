import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;

}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Jefferson Wesley</Text>
          <Text color="gray.300" fontSize="small">
            jefferson.wms@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Jefferson Wesley" src="https://github.com/jeffersonwms.png" />
    </Flex>
  )
}